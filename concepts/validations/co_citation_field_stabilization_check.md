# Co-citation field stabilization check

## Summary

Co-citation field stabilization check tests whether a paper-specific co-citation field and its field citation rate converge quickly enough for a citation indicator to be interpreted.

## Canonical Form

- Unit of analysis: focal paper, co-citation field, field citation rate, citation snapshot, or normalized citation indicator.
- Typical representation: stability curve comparing early and later field citation rates by number of starting citations.
- Validation target: whether a dynamic field definition becomes reliable after a modest number of citation events.
- Empirical signature: early field citation rates correlate strongly with later field citation rates after a stated citation threshold.

## Uses in Science of Science

- Validates the dynamic reference-set layer behind [Relative Citation Ratio](../measures/relative_citation_ratio.md).
- Turns [co-citation network field definition](../representations/co_citation_network_field_definition.md) from a representation choice into a measurable robustness check.
- Supports [field citation rate](../measures/field_citation_rate.md) by documenting when its denominator should be treated as stable.
- Provides a reusable template for citation indicators that use time-evolving comparison fields.

## Operationalization

- Build a focal paper's co-citation network at an early citation snapshot.
- Compute the early [field citation rate](../measures/field_citation_rate.md).
- Recompute the field citation rate after a later citation snapshot.
- Stratify focal papers by the number of citations available at the early snapshot.
- Report the early-later correlation, convergence threshold, and share of papers meeting a stability criterion.
- Mark normalized scores as provisional before the stability or citation-window benchmark is reached.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) calculates field citation rates for 262,988 R01-grantee papers published from 2003 to 2011 and cited at least once by the end of 2012, then recalculates those rates using citations through 2014.
- The paper finds that earlier FCR values align with later values even when the initial co-citation field is built from one citation, reporting a Pearson correlation of 0.75 against the later snapshot.
- Hutchins et al. report that FCR convergence passes a correlation threshold of 0.9 by five starting citations.
- The stability argument is tied to co-citation field growth: each additional citation adds many co-cited papers, so the comparison field grows faster than a citing-paper network.
- A related RCR perturbation check finds that only 0.2% of more than 200,000 tested papers had an RCR drop of at least 0.1 between 2012 and 2014, with fewer than 2% showing any drop.
- The discussion translates this into an interpretation rule: RCR values should be viewed as provisional before enough citations or time have accumulated, and roughly 93% of co-citation-network FCRs stabilize after five citations in their biomedical sample.

## Caveats

- The five-citation threshold is an empirical rule from a biomedical R01-linked dataset, not a universal law.
- Stability of the field denominator does not validate article quality or social value.
- Field stability should be rechecked when citation windows, databases, document types, or domains change.
- Recent papers can still have unstable citation rates even if their field citation rate is stable.

## Links

- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [field citation rate](../measures/field_citation_rate.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [RCR ranking invariance](rcr_ranking_invariance.md)
- [low-denominator metric inflation check](low_denominator_metric_inflation_check.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `co_citation_field_stabilization_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: FCR stability check; co-citation field convergence; provisional RCR threshold; five-citation FCR stabilization
