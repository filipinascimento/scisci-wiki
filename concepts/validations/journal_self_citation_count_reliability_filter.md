# Journal self-citation count reliability filter

## Summary

Journal self-citation count reliability filters exclude journal-year observations with too few own-paper self-citations to support stable impact-factor-window self-citation ratios.

## Canonical Form

- Unit of analysis: journal-year, journal self-citation count, eligibility threshold, IFBSCP denominator, or citation panel.
- Typical representation: minimum same-journal citation count filter before computing or reporting journal self-citation anomaly ratios.
- Validation target: reduce sparse-denominator noise in journal-level self-citation screens.
- Empirical signature: low-volume journal-years are excluded or flagged before ratio-based indicators are interpreted.

## Uses in Science of Science

- Provides the inclusion gate for the [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md).
- Stabilizes [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md) and [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md).
- Complements [IFBSCP window sensitivity](ifbscp_window_sensitivity.md), because window choices matter more when citation counts are sparse.
- Connects journal metric auditing to broader [unique identifier inclusion gate](unique_identifier_inclusion_gate.md)-style population caveats.

## Operationalization

- Define the cited-year span over which own-paper self-citations are counted.
- Require a minimum number of journal self-citations before computing the ratio or including the journal-year in trend statistics.
- Record how many journal-year observations are excluded.
- Report how the filter changes field, journal-size, and time-period coverage.
- Treat excluded small journals as outside the stable-ratio analysis, not as non-gaming journals.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) excludes journal-year cases that cite their own papers in the past seven years fewer than 50 times.
- The paper reports that this removes 88,842 of 164,757 journal-year cases.
- After the filter, the analytic panel contains 75,915 journal-year cases from 1987 to 2015.
- Chorus and Waltman use the filter to focus on journals for which sufficiently reliable IFBSCP statistics can be computed.

## Caveats

- Minimum-count filters improve ratio stability but can exclude small, new, specialized, or low-self-citing journals.
- Filtered trend results describe the eligible journal population, not all journals.
- The threshold itself is a design choice and should be reported in replications.

## Links

- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [IFBSCP window sensitivity](ifbscp_window_sensitivity.md)
- [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md)
- [unique identifier inclusion gate](unique_identifier_inclusion_gate.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `journal_self_citation_count_reliability_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP minimum-count filter; journal self-citation denominator filter; sparse self-citation exclusion; IFBSCP reliability gate
