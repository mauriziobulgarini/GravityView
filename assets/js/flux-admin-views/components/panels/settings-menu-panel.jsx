var React = require('react');
var Panel = require('./panel.jsx');
var PanelContentMenu = require('./panel-content-menu.jsx');

var ViewConstants = require('../../constants/view-constants.js');
var ViewActions = require('../../actions/view-actions.js');


var SettingsMenuPanel = React.createClass({

    propTypes: {
        returnPanel: React.PropTypes.string, // holds the panel ID when going back
        currentPanel: React.PropTypes.string // the current active panel
    },

    getInitialState: function() {
        return {
            sections: gravityview_view_settings.settings_sections,  // holds the settings sections ( loaded via js wp_localize_script )
        };
    },

    /**
     * Handler for menu items click
     * @param e
     */
    handleSectionClick: function(e) {
        e.preventDefault();
        ViewActions.openPanel( e.target.getAttribute( 'data-next-panel' ), this.props.currentPanel );
    },

    render: function() {

        var isPanelVisible = ( this.props.currentPanel === ViewConstants.PANEL_SETTINGS ) || ( this.props.returnPanel === ViewConstants.PANEL_SETTINGS );

        return (

            <Panel isVisible={isPanelVisible} returnPanel={this.props.returnPanel} title={gravityview_i18n.panel_settings_title}>
                <PanelContentMenu menuItems={this.state.sections} handleClick={this.handleSectionClick} />
            </Panel>

        );
    }


});

module.exports = SettingsMenuPanel;