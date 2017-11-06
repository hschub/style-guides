# JavaScript style guide

## React

* Order props and state alphabetically, however, for props have the required props come first.


  **ESLint rule:** _coming soon…_

  **Good:**
  
  ```js
  type Props = {
    message: string,
    type: 'info' | 'success' | 'warning' | 'error',
    actionButtonLabel?: Children,
    id?: string | number,
    onActionButtonClick?: Function,
    onDismiss?: Function,
  };
  ```
 
  **Bad:**
  
  ```js
  type Props = {
    actionButtonLabel?: Children,
    id?: string | number,
    message: string,
    onActionButtonClick?: Function,
    onDismiss?: Function,
    type: 'info' | 'success' | 'warning' | 'error',
  };
  ```
