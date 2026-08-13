# Field citation-practice incommensurability

## Summary

Field citation-practice incommensurability is the validation problem that citation comparisons across fields or journals are confounded by different publication rates, reference-list lengths, citation customs, and acknowledgement traditions.

## Canonical Form

- Unit of analysis: field, journal, paper cohort, citation indicator, or comparison set.
- Typical representation: field-normalization warning, practice-difference audit, or cross-field comparability check.
- Validation target: whether citation indicators compare like with like.
- Empirical signature: raw citation counts mix paper influence with field-specific citation opportunities and norms.

## Uses in Science of Science

- Motivates [field normalized citation impact](../measures/field_normalized_citation_impact.md).
- Informs [citation window selection](../methods/citation_window_selection.md).
- Provides a threat model for [universal citation-history rescaling](universal_citation_history_rescaling.md).
- Links to [citation volume growth normalization](../methods/citation_volume_growth_normalization.md).

## Operationalization

- Compare fields or journals on publication volume, reference-list length, and citation-age profile.
- Use field-normalized or model-based citation measures when cross-field comparison is needed.
- Validate whether rescaled trajectories collapse across fields or journals.
- Report the field and journal definitions used by the comparison.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) names incompatible publication, citation, and acknowledgement traditions as a reason raw citation measures are difficult to compare.
- The paper positions its rescaling approach against prior field-rescaled distribution work.
- It then motivates a journal-independent assessment of long-term impact.

## Caveats

- Normalization can remove meaningful differences if fields are defined too coarsely.
- Field labels can be noisy, overlapping, or strategically assigned.
- Practice incommensurability also affects self-citation, team size, and review-article comparisons.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation window selection](../methods/citation_window_selection.md)
- [universal citation-history rescaling](universal_citation_history_rescaling.md)
- [citation volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [citation-measure predictability-limit taxonomy](citation_measure_predictability_limit_taxonomy.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612; WoS: unknown]

## Metadata

- Concept ID: `field_citation_practice_incommensurability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: cross-field citation incommensurability; citation practice heterogeneity; field citation comparability threat
