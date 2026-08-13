# IFBSCP window sensitivity

## Summary

IFBSCP window sensitivity checks whether impact-factor-biased self-citation rankings remain stable when the baseline self-citation window changes.

## Canonical Form

- Unit of analysis: journal, journal-year, baseline-window parameter, IFBSCP value, or journal ranking.
- Typical representation: Pearson correlation, Kendall rank correlation, or ratio of IFBSCP values under alternative `Y` windows.
- Validation target: test whether a metric-gaming screen is an artifact of an arbitrary baseline-window choice.
- Empirical signature: IFBSCP values and rankings remain moderately to highly correlated across plausible window specifications.

## Uses in Science of Science

- Provides robustness support for [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md).
- Varies the `Y` parameter in [IFBSCP nonoverlapping baseline window](../methods/ifbscp_nonoverlapping_baseline_window.md).
- Helps interpret [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md) and [coercive-citation survey linkage](coercive_citation_survey_linkage.md).
- Fits the broader [responsible metrics](../measures/responsible_metrics.md) practice of reporting indicator sensitivity before using a metric for judgment.

## Operationalization

- Choose a focal year and eligible journal set.
- Compute IFBSCP under the baseline `Y` and under alternative baseline-window values.
- Report value correlations, rank correlations, and distribution of ratios between baseline and alternative specifications.
- Inspect whether journals near policy thresholds move substantially under plausible window changes.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) treats `Y = 7` as partly arbitrary and tests `Y` values from 4 to 10.
- The stability analysis uses 7,223 journals that continuously published from 2005 to 2015 and computes IFBSCP for 2015.
- Pearson correlations between `Y = 7` and alternatives range from 0.71 for `Y = 4` to 0.95 for `Y = 8`; Kendall rank correlations range from 0.69 to 0.90.
- Ratio checks comparing `Y = 7` with `Y = 4` and `Y = 10` support the authors' conclusion that IFBSCP is stable across alternative values of `Y`.

## Caveats

- Stability in aggregate does not guarantee stability for every journal near a threshold.
- Window sensitivity may differ by field, journal age, citation half-life, and publication volume.
- A stable metric can still be a noisy misconduct screen if legitimate mechanisms drive high recent self-citation.

## Links

- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP nonoverlapping baseline window](../methods/ifbscp_nonoverlapping_baseline_window.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [coercive-citation survey linkage](coercive_citation_survey_linkage.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [indicator false precision](indicator_false_precision.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]

## Metadata

- Concept ID: `ifbscp_window_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP Y sensitivity; self-citation baseline-window sensitivity; IFBSCP robustness to window choice; journal self-citation timing robustness
