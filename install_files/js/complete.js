/*!
 * Install Progress (Step 5)
 */

Installer.Pages.installComplete.beforeUnload = function() {
    // Hide the leaves
    $(document).februaryLeaves('stop')
}

Installer.Pages.installComplete.beforeShow = function() {

    var backendUri = Installer.Data.config.backend_uri,
        baseUrl = installerBaseUrl

        if (baseUrl.charAt(baseUrl.length - 1) == '/')
            baseUrl = baseUrl.substr(0, baseUrl.length - 1)

    Installer.Pages.installComplete.baseUrl = installerBaseUrl
    Installer.Pages.installComplete.backendUrl = baseUrl + backendUri

}

Installer.Pages.installComplete.init = function() {
    // Purrty leaves
    $(document).februaryLeaves({ numberOfLeaves: 10, cycleSpeed: 40 })
    $(document).februaryLeaves('start')
}
