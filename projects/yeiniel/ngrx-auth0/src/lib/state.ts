
/** NgRx feature state specification */
export interface State {
  /** Whether or not the use is logged in */
  isLoggedIn: boolean;

  /** User profile if logged in */
  profile?: any;
}
