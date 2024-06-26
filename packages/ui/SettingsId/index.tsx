interface SettingsIdProps {
  title: string;
  id: string;
}

export const SettingsId = ({ title, id }: SettingsIdProps) => {
  return (
    <p className="pb-3 text-xs text-slate-400">
      {title} ID: {id}
    </p>
  );
};
