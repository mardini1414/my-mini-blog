import React from 'react';

function Alert({
  variant = 'success',
  children,
}: AlertProps): React.JSX.Element {
  let alertClasses = 'px-4 py-2 rounded-lg';

  if (variant === 'success') {
    alertClasses += ' bg-green-100 text-green-800';
  } else if (variant === 'danger') {
    alertClasses += ' bg-red-100 text-red-800';
  }

  return (
    <div className={alertClasses} role="alert">
      {children}
    </div>
  );
}

export default Alert;
