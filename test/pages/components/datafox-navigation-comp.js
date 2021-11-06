class DatafoxNavigationComponent {
    get datafoxLogo() {
        return $('//img[@alt="Home"]');
    }

    get listsTab() {
        return $('//a[@href="/search/lists"]//span[text()="Lists"]');
    }

    get companiesTab() {
        return $('//a[@href="/search/companies"]');
    }

    get insightsTab() {
        return $('//a[@href="/insights"]');
    }

    get accountScoringTab() {
        return $('//a[@href="/account-scoring"]');
    }

    get conferencesTab() {
        return $('//a[@href="/search/conferences"]');
    }

    get uploadListTab() {
        return $('//a[@href="/process-list"]');
    }

    get recentItemsTab() {
        return $('#recentItems');
    }

    get documentationTab() {
        return $('//a[@href="https://docs.oracle.com/en/cloud/saas/datafox/index.html"]//span[text()="Documentation"]');
    }

}

export default new DatafoxNavigationComponent();