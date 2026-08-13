# Five-year IFBSCP variant

## Summary

Five-year IFBSCP variant extends impact-factor-biased self-citation screening from the two-year impact-factor window to a five-year impact-factor window.

## Canonical Form

- Unit of analysis: journal, journal year, self-citation window, impact-factor variant, or citation audit.
- Typical representation: IFBSCP-style ratio with a five-year numerator window and a nonoverlapping baseline window.
- Method target: test whether journal self-citation timing bias changes when the incentive window is the five-year impact factor.
- Empirical signature: journals flagged under the two-year screen may or may not remain flagged under a five-year citation-window variant.

## Uses in Science of Science

- Adds a window variant to [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md).
- Extends [IFBSCP nonoverlapping baseline window](ifbscp_nonoverlapping_baseline_window.md) and [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md).
- Connects journal self-citation audits to [journal impact factor](../measures/journal_impact_factor.md) variants.

## Operationalization

- Replace the two-year impact-factor numerator window with the five-year impact-factor window.
- Choose a preceding baseline window that does not overlap the numerator.
- Apply the same minimum-count and journal-year eligibility filters used in the main IFBSCP design.
- Compare journal flags, field averages, and threshold exceedance shares across two-year and five-year variants.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) defines IFBSCP around the traditional two-year impact-factor window.
- The paper states that, following the same logic, a variant for the five-year impact factor can be derived.
- The same methods section emphasizes the importance of nonoverlapping numerator and denominator years when computing the ratio.

## Caveats

- A five-year variant may be less sensitive to short-term coercive citation pressure but better aligned with longer journal impact windows.
- The proper baseline length is a design choice and should be reported.
- The variant remains a screening metric, not proof of misconduct.

## Links

- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP nonoverlapping baseline window](ifbscp_nonoverlapping_baseline_window.md)
- [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `five_year_ifbscp_variant`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: five-year impact factor self-citation screen; five-year IFBSCP; long-window IFBSCP; five-year journal self-citation variant
