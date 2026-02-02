export default function AdSlot({ slot, height = '90px' }) {
    return (
        <div
            className="ad-slot"
            style={{ minHeight: height }}
            data-ad-slot={slot}
        >
            <span className="ad-slot-label">Reklam Alanı</span>
        </div>
    );
}
