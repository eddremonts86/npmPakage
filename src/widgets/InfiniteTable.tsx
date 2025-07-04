import React, { useEffect, useMemo, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { cn } from '../utils/cn';

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  width?: number;
  sortable?: boolean;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
}

export interface InfiniteTableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  onLoadMore?: () => void;
  hasNextPage?: boolean;
  itemHeight?: number;
  height?: number;
  className?: string;
}

interface RowData<T> {
  index: number;
  style: React.CSSProperties;
  data: {
    items: T[];
    columns: TableColumn<T>[];
  };
}

function TableRow<T>({ index, style, data }: RowData<T>) {
  const { items, columns } = data;
  const item = items[index];

  if (!item) {
    return (
      <div
        style={style}
        className={cn(
          'flex items-center justify-center',
          'schilling-table-row'
        )}
      >
        <div className={cn('animate-pulse', 'schilling-spinner')}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div style={style} className={cn('flex border-b', 'schilling-table-row')}>
      {columns.map(column => {
        const value = (item as Record<string, unknown>)[column.key];
        const content = column.render
          ? column.render(value, item, index)
          : String(value);

        return (
          <div
            key={`${column.key}-${index}`}
            className={cn('flex-1 p-3 text-sm', 'schilling-table-cell')}
            style={{ width: column.width }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

// Create a wrapper component that handles the generic types properly
const TableRowWrapper = React.memo(
  (props: {
    index: number;
    style: React.CSSProperties;
    data: {
      items: unknown[];
      columns: TableColumn<unknown>[];
    };
  }) => {
    return TableRow(props as RowData<unknown>);
  }
);

export function InfiniteTable<T = Record<string, unknown>>({
  columns,
  data,
  loading = false,
  onLoadMore,
  hasNextPage = false,
  itemHeight = 50,
  height = 400,
  className,
}: InfiniteTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T];
      const bValue = b[sortConfig.key as keyof T];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const itemData = useMemo(
    () => ({
      items: sortedData,
      columns,
    }),
    [sortedData, columns]
  );

  useEffect(() => {
    if (onLoadMore && hasNextPage && !loading) {
      // Auto-load more when near the end
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 100) {
          onLoadMore();
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [onLoadMore, hasNextPage, loading]);

  return (
    <div
      className={cn(
        'border rounded-lg overflow-hidden',
        'schilling-table-container',
        className
      )}
    >
      {/* Header */}
      <div
        className={cn('flex bg-muted/50 border-b', 'schilling-table-header')}
      >
        {columns.map(column => {
          if (column.sortable) {
            return (
              <button
                key={column.key}
                className={cn(
                  'flex-1 p-3 font-medium text-sm text-muted-foreground text-left',
                  'schilling-table-header-cell',
                  'cursor-pointer hover:bg-muted/80 border-none bg-transparent'
                )}
                style={{ width: column.width }}
                onClick={() => handleSort(column.key)}
                type='button'
                title={`Sort by ${column.header}`}
              >
                <div className='flex items-center gap-2'>
                  {column.header}
                  {sortConfig?.key === column.key && (
                    <span className='text-xs' aria-hidden='true'>
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </button>
            );
          }

          return (
            <div
              key={column.key}
              className={cn(
                'flex-1 p-3 font-medium text-sm text-muted-foreground',
                'schilling-table-header-cell'
              )}
              style={{ width: column.width }}
            >
              <div className='flex items-center gap-2'>{column.header}</div>
            </div>
          );
        })}
      </div>

      {/* Body */}
      <div style={{ height }}>
        <List
          height={height}
          width='100%'
          itemCount={sortedData.length + (hasNextPage ? 1 : 0)}
          itemSize={itemHeight}
          itemData={
            itemData as { items: unknown[]; columns: TableColumn<unknown>[] }
          }
        >
          {TableRowWrapper}
        </List>
      </div>

      {loading && (
        <div
          className={cn(
            'flex justify-center p-4',
            'schilling-flex schilling-justify-center schilling-p-4'
          )}
        >
          <div
            className={cn(
              'animate-spin rounded-full h-4 w-4 border-b-2 border-primary',
              'schilling-spinner'
            )}
          >
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfiniteTable;
