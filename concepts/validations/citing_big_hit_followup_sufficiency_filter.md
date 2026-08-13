# Citing-big-hit follow-up sufficiency filter

## Summary

Later citing papers need enough citation exposure before they can be reliably labeled as big hits.

## Canonical Form

- Unit of analysis: citing paper, follow-up window, top-percentile classification, or downstream impact model.
- Typical representation: minimum follow-up rule for classifying later citing papers as big hits.
- Mechanism, measurement, or validation target: reliability of downstream big-hit labels.
- Empirical signature: citing papers are only labeled as big hits after a minimum citation accumulation window..

## Uses in Science of Science

- Adds a follow-up filter to [cited-by big-hit indicator](../measures/cited_by_big_hit_indicator.md).
- Useful for dynamic big-hit window models and indirect novelty impact studies.
- Connects downstream influence to [citation window selection](../methods/citation_window_selection.md).

## Operationalization

- Impose minimum follow-up windows for citing-paper top-percentile classification.
- Run sensitivity checks across thresholds and cohort cutoffs.
- Report recent downstream influence excluded by the filter.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2017) restricts citing articles in the cited-by-big-hit analysis so each has at least five years for citation accumulation.
- This supports follow-up sufficiency as a validation rule.

## Caveats

- The filter improves reliability but excludes recent downstream influence.
- Field-specific citation speeds may require different windows.

## Links

- [Cited-by-big-hit indicator](../measures/cited_by_big_hit_indicator.md)
- [Novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md)
- [Citation window selection](../methods/citation_window_selection.md)
- [Dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md)
- [Direct-indirect novelty impact split](direct_indirect_novelty_impact_split.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `citing_big_hit_followup_sufficiency_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: big-hit follow-up sufficiency; citing-paper citation-window filter; downstream hit reliability filter
