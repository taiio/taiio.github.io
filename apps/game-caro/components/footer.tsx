export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4 gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Relaxing online</p>
        </div>
      </div>
    </footer>
  )
}
