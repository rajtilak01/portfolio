export default function Footer() {
    return (
      <footer className="bg-neutral-900 text-gray-500 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rajtilak Pandey. Crafted with care.
          </p>
        </div>
      </footer>
    );
  }
  