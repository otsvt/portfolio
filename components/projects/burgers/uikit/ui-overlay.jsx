export const UiOverlay = ({ className, children, isVisible, callback }) => {
  if (!isVisible) return;

  return (
    <div onClick={callback} className={className}>
      {children}
    </div>
  );
};
