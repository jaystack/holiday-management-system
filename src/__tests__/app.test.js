import * as app from '../store/app';

/**
 * MOCK DATA
 */
const appWaitingState = {
  app: {
    appWaiting: 1,
  }
};

const mobileDrawerOpenedState = {
  app: {
    isMobileDrawerOpened: true
  }
};

const multipleAlertsState = {
  app: {
    alerts: [
      { desc: 'firstAlert', severity: 'error', title: 'firstAlert' },
      { desc: 'lastAlert', severity: 'error', title: 'lastAlert' }
    ],
  }
};
const alert = {
  desc: 'firstAlert',
  severity: 'error',
  title: 'firstAlert'
};
const alerts = [
  { desc: 'firstAlert', severity: 'error', title: 'firstAlert' },
  { desc: 'lastAlert', severity: 'error', title: 'lastAlert' }
];
const lastAlert = {
  id: 1,
  desc: 'lastAlert',
  severity: 'error',
  title: 'lastAlert'
};

const removeAlertState = {
  alerts: [{ desc: 'api success desc', severity: 'error', title: 'API ERROR' }],
  appWaiting: 0,
  isMobileDrawerOpened: false
};
const appState = {
  alerts: [],
  appWaiting: 1,
  isMobileDrawerOpened: false
};
/**
 * ACTIONS
 */
describe('actions', () => {
  it('toggleMobileDrawer', () => {
    const expectedAction = {
      type: app.TOGGLE_MOBILE_DRAWER,
    };
    expect(app.toggleMobileDrawer()).toEqual(expectedAction);
  });
  it('setAppWaiting', () => {
    const expectedAction = {
      type: app.SET_APP_WAITING,
    };
    expect(app.setAppWaiting()).toEqual(expectedAction);
  });
  it('addAlert', () => {
    const expectedAction = {
      type: app.ADD_ALERT,
      payload: alert
    };
    expect(app.addAlert(alert)).toEqual(expectedAction);
  });
  it('removeAlert', () => {
    const expectedAction = {
      type: app.REMOVE_ALERT,
      payload: 1
    };
    expect(app.removeAlert(1)).toEqual(expectedAction);
  });
});
/**
 * SELECTORS
 */
describe('selectors', () => {
  it('getIsMobileDrawerOpened', () => {
    expect(app.getIsMobileDrawerOpened(mobileDrawerOpenedState)).toEqual(true);
  });
  it('getAppWaitingCounter', () => {
    expect(app.getAppWaitingCounter(appWaitingState)).toEqual(1);
  });
  it('isThereAlert', () => {
    expect(app.isThereAlert(multipleAlertsState)).toEqual(true);
  });
  it('getAlerts', () => {
    expect(app.getAlerts(multipleAlertsState)).toEqual(alerts);
  });
  it('getLastAlert', () => {
    expect(app.getLastAlert(multipleAlertsState)).toEqual(lastAlert);
  });
});
/**
 * REDUCER
 */
describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(app.reducer(undefined, {})).toEqual(app.initialState);
  });

  it(app.ADD_ALERT, () => {
    expect(
      app.reducer(app.initialState, {
        type: app.ADD_ALERT,
        payload: { title: 'API ERROR', desc: 'api success desc', severity: 'error' }
      })
    ).toHaveProperty('alerts', [{ desc: 'api success desc', severity: 'error', title: 'API ERROR' }]);
  });

  it(app.REMOVE_ALERT, () => {
    expect(
      app.reducer(removeAlertState, {
        type: app.REMOVE_ALERT,
        payload: 0
      })
    ).toHaveProperty('alerts', []);
  });

  it(app.SET_APP_WAITING, () => {
    expect(
      app.reducer(app.initialState, {
        type: app.SET_APP_WAITING,
        payload: true
      })
    ).toHaveProperty('appWaiting', 1);
  });
  it(app.SET_APP_WAITING, () => {
    expect(
      app.reducer(appState, {
        type: app.SET_APP_WAITING,
        payload: false
      })
    ).toHaveProperty('appWaiting', 0);
  });

  it(app.TOGGLE_MOBILE_DRAWER, () => {
    expect(
      app.reducer(app.initialState, {
        type: app.TOGGLE_MOBILE_DRAWER,
        payload: false
      })
    ).toHaveProperty('isMobileDrawerOpened', true);
  });
});
