function shouldShowDate(item, sectionName) {
  const normalizedDate = (item.dates || '').trim().toLowerCase();
  const normalizedSection = sectionName.trim().toLowerCase();
  return normalizedDate && normalizedDate !== normalizedSection && normalizedDate !== 'project';
}

export default function DetailOverlay({ card, onClose }) {
  const isOpen = card !== null;
  const isWhoAmI = card?.item?.title === 'Who Am I';

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  if (!isOpen) {
    return (
      <div id="detailOverlay" aria-live="polite">
        <div id="detailPanel" />
      </div>
    );
  }

  const { con, item } = card;
  const showDate = shouldShowDate(item, con.name);

  return (
    <div id="detailOverlay" className="show" aria-live="polite" onClick={handleOverlayClick}>
      <div id="detailPanel" className={isWhoAmI ? 'who-am-i-mode' : undefined}>
        <div className="kicker">{con.name}</div>
        <div className="title">{item.title}</div>
        {showDate ? <div className="date">{item.dates}</div> : null}
        <div className="desc" dangerouslySetInnerHTML={{ __html: item.desc }} />
      </div>
    </div>
  );
}
