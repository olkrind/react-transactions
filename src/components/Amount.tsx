const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'UZS' });

export function Amount({ value }: { value: number }) {
    return (
        <span style={{ color: value < 0 ? '#c62828' : '#2e7d32' }}>
      {formatter.format(value)}
    </span>
    );
}