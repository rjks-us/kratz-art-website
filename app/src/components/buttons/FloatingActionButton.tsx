export default function FloatingActionButton({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed w-14 h-14 shadow-md bg-[#D9D7D6] rounded-full bottom-4 right-4 flex justify-center items-center hover:-translate-y-2 transition">
            {children}
        </div>
    );
}
