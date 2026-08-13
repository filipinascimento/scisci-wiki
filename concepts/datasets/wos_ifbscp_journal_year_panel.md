# WoS IFBSCP journal-year panel

## Summary

The WoS IFBSCP journal-year panel is a Web of Science journal citation panel used to measure impact-factor-biased journal self-citations from 1987 to 2015.

## Canonical Form

- Unit of analysis: journal-year, journal self-citation, impact-factor citation window, field domain, or Web of Science source journal.
- Typical representation: journal-year rows with self-citation counts by cited-paper age, IFBSCP value, threshold flags, and field domain.
- Data type: journal citation panel for metric-gaming diagnostics.
- Empirical signature: longitudinal journal self-citation behavior can be compared before and after the rise of impact-factor salience.

## Uses in Science of Science

- Supplies the data layer for [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md), [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md), and [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md).
- Links [Web of Science](web_of_science.md) journal citation data to [citation metric gaming](../validations/citation_metric_gaming.md) and [journal impact factor](../measures/journal_impact_factor.md).
- Provides a historical comparison layer for current journal-evaluation audits in Dimensions, OpenAlex, Scopus, or newer WoS snapshots.
- Uses [journal self-citation count reliability filter](../validations/journal_self_citation_count_reliability_filter.md) to define the stable-ratio analytic population.

## Operationalization

- Extract journal-to-journal citation data from Web of Science for Sciences and Social Sciences.
- For each journal-year, count journal self-citations to papers in impact-factor years and to preceding baseline years.
- Apply minimum-count filters so ratios are not dominated by very sparse self-citation denominators.
- Attach broad field-domain labels before comparing trends across Life, Physical, and Social Sciences.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) uses Web of Science citation data for Sciences and Social Sciences, excluding Arts and Humanities because those journals do not have impact factors.
- The paper computes IFBSCP for every journal and year from 1987 to 2015.
- With `Y = 7`, Chorus and Waltman compare journal self-citations to the two impact-factor years with self-citations to the five preceding years.
- After excluding journal-year cases with fewer than 50 self-citations to own papers in the preceding seven years, the analytic panel contains 75,915 journal-year cases; the number of journals rises from 1,520 in 1987 to 4,767 in 2015.

## Caveats

- The panel covers Web of Science indexed journals and does not represent all journals.
- The 50-self-citation minimum improves stability but excludes small or low-self-citing journals.
- Historical WoS field coverage, journal inclusion, and impact-factor incentives changed across the 1987-2015 window.

## Links

- [Web of Science](web_of_science.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md)
- [journal self-citation count reliability filter](../validations/journal_self_citation_count_reliability_filter.md)
- [domain-specific IFBSCP gradient](../validations/domain_specific_ifbscp_gradient.md)
- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]

## Metadata

- Concept ID: `wos_ifbscp_journal_year_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP WoS panel; journal-year self-citation panel; impact-factor self-citation panel; WoS journal citation gaming panel
