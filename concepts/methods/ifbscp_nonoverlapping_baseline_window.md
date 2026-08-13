# IFBSCP nonoverlapping baseline window

## Summary

IFBSCP nonoverlapping baseline window construction compares journal self-citations to impact-factor-window papers with self-citations to earlier own papers while keeping the two windows separate.

## Canonical Form

- Unit of analysis: journal-year, cited-paper age, journal self-citation, impact-factor window, or baseline window.
- Typical representation: numerator window for years `y-1` and `y-2`, denominator window for years `y-3` through `y-Y`.
- Method target: isolate self-citation concentration in the two-year impact-factor window without mixing those years into the baseline.
- Empirical signature: a journal's recent self-citation share can be compared with its older self-citation share using nonoverlapping cited-age bins.

## Uses in Science of Science

- Provides the denominator-design rule behind [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md).
- Gives [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md) a clear parameter to vary.
- Makes [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md) reproducible by specifying which cited years are included.
- Connects journal self-citation screens to broader [citation window selection](citation_window_selection.md) choices.

## Operationalization

- Choose a focal citing year `y`.
- Count journal self-citations from papers in the focal journal-year to papers in the same journal from `y-1` and `y-2`.
- Divide by all citations from the same citing year to focal-journal papers from `y-1` and `y-2`.
- Count journal self-citations to older focal-journal papers from `y-3` through `y-Y` and divide by all citations to those same older papers.
- Compute the ratio of the recent self-citation share to the older self-citation share.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) defines IFBSCP using a numerator for journal self-citations to papers in the two impact-factor years and a denominator for journal self-citations to papers in preceding years.
- The paper sets `Y = 7` in its main analysis, comparing the two impact-factor years with the five preceding years.
- Chorus and Waltman explicitly distinguish their denominator from an earlier procedure that used all years preceding `y`, because that procedure creates overlap between numerator and denominator years.
- The paper notes that variants for a five-year impact factor can be derived using the same logic.

## Caveats

- The baseline window is still a modeling choice and can affect journals near thresholds.
- Cited-age distributions vary by field, journal type, and publication volume.
- A nonoverlapping window improves interpretability but does not make high IFBSCP proof of misconduct.

## Links

- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [citation window selection](citation_window_selection.md)
- [journal impact factor](../measures/journal_impact_factor.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `ifbscp_nonoverlapping_baseline_window`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP baseline window; nonoverlapping self-citation denominator; impact-factor self-citation denominator; cited-age baseline window
