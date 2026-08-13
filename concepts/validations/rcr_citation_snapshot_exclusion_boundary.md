# RCR citation-snapshot exclusion boundary

## Summary

RCR analyses are conditional on the citation-source snapshot and should exclude focal publications too recent to have stable citation rates.

## Canonical Form

- Unit of analysis: citation snapshot, focal publication year, reference year, WoS extract, or RCR inclusion flag.
- Typical representation: data-vintage and final-year exclusion rule for RCR cohorts.
- Mechanism, measurement, or validation target: right-censoring and snapshot dependence in RCR computation.
- Empirical signature: RCR values and field neighborhoods differ when the citation-source vintage or final-year exclusion rule changes.

## Uses in Science of Science

- Refines RCR temporal validation by linking it to [citation window selection](../methods/citation_window_selection.md) and [citation index snapshot dependence](citation_index_snapshot_dependence.md).
- Useful as a reusable check when [co citation field stabilization check](co_citation_field_stabilization_check.md) is used in science-of-science inference.
- Creates cross-links to [article citation rate](../measures/article_citation_rate.md) so the motif is not interpreted in isolation.

## Operationalization

- Record the WoS or citation-index snapshot used for ACR, co-citation fields, and FCR construction.
- Exclude final-year focal publications from evaluative analyses when citation accumulation is too short.
- Allow references from too-recent citing papers to contribute to older focal papers only when the rule is documented.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) uses WoS 2002-2012, extends to 2014 for FCR stability, and excludes 2012 focal publications because of insufficient citation time.
- This makes citation snapshot and right-censoring explicit parts of the RCR denominator.

## Caveats

- Snapshot choices affect article citation rates, co-citation fields, and RCR denominators together.
- Exclusion rules can create cohort differences if not reported with the metric release.

## Links

- [Citation window selection](../methods/citation_window_selection.md)
- [Citation-index snapshot dependence](citation_index_snapshot_dependence.md)
- [Co-citation field stabilization check](co_citation_field_stabilization_check.md)
- [Article citation rate](../measures/article_citation_rate.md)
- [Web of Science](../datasets/web_of_science.md)
- [Publication-window left-censoring exclusion](publication_window_left_censoring_exclusion.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_citation_snapshot_exclusion_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR data-vintage boundary; final-year exclusion rule; citation snapshot censoring
