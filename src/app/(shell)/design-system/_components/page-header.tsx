interface Props {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: Props) {
  return (
    <header className="mb-8 space-y-1.5">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
