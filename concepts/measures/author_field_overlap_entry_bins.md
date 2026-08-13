# Author field-overlap entry bins

## Summary

Author field-overlap entry bins classify potential entrants by how much of their prior work already belonged to a focal field, separating incumbent competitors from intellectual outsiders.

## Canonical Form

- Unit of analysis: author, related article, field, field-year, overlap percentile bin, or entrant category.
- Typical representation: fraction of an author's prior publications in the focal field, grouped into zero-overlap, low-overlap, percentile, and new-scientist bins.
- Measurement target: whether post-shock field growth comes from incumbents, nearby competitors, or outsiders.
- Empirical signature: treatment effects are concentrated in low-overlap or zero-overlap author bins when outsider entry drives field renewal.

## Uses in Science of Science

- Operationalizes the entrant side of [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md).
- Helps distinguish leadership reshuffling inside a field from [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md) being relaxed for outsiders.
- Provides a person-level complement to [collaborator/non-collaborator field flow](collaborator_noncollaborator_field_flow.md).
- Can be adapted to topic models, citation clusters, semantic embeddings, or journal categories when PMRA is unavailable.

## Operationalization

- For each author on a related article, compute the fraction of that author's prior publications that fall in the focal field before the article year.
- Assign the article the maximum field-overlap score among its matched authors when a single article-level score is needed.
- Create bins for new scientists, zero-overlap authors, low-overlap authors, and upper-percentile overlap intervals.
- Aggregate article counts by field-year and overlap bin, then estimate event-study or difference-in-differences effects by bin.
- Report roster-matching coverage, because unobserved authors can bias entrant classification.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) computes author overlap as the fraction of an AAMC-matched related author's publications that belong to the star's subfield up to the publication year.
- The paper assigns an article the highest overlap score among matched authors.
- About half of related articles have authors with zero prior intellectual overlap with the star's subfield, and 1.24% are by new scientists whose first publication is in the subfield.
- Post-death non-collaborator growth is concentrated among low-overlap entrants rather than high-overlap competitors.
- A robustness check defines overlap against all subfields associated with a star and leaves the conclusion unchanged.

## Caveats

- Field overlap is an intellectual-history measure, not a direct measure of social distance, rivalry, or institutional access.
- Author disambiguation and roster matching can undercount prior work for foreign, industrial, or nonacademic authors.
- A low-overlap entrant may still have private knowledge of the field through training, conferences, grants, or informal ties.

## Links

- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [collaborator/non-collaborator field flow](collaborator_noncollaborator_field_flow.md)
- [PMRA subfield delineation](../methods/pmra_subfield_delineation.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-level output reallocation check](../validations/author_level_output_reallocation_check.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `author_field_overlap_entry_bins`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: entrant field-overlap bins; author intellectual proximity bins; outsider overlap measure; prior field-overlap score
