import styles from "./create.module.css";
export default function CreatePlaylistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className={styles.wrapper}>{children}</section>
    </main>
  );
}
