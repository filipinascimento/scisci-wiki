# Co-citation core sampling boundary

## Summary

Co-citation core sampling boundary is the validation concern that a recovered co-cited core depends on seed choice, citation-index snapshot, node-entry thresholds, and edge-display thresholds, so it may be a useful core without being the complete specialty literature.

## Canonical Form

- Unit of analysis: co-cited core, candidate-paper set, seed paper, citation-index snapshot, threshold rule, or specialty map.
- Typical representation: seed and threshold audit, omitted-node warning, candidate-core completeness note, or sensitivity check.
- Validation target: distinguish a reproducible co-citation sample from a complete map of all important works in a specialty.
- Empirical signature: changing the seed, citation window, or frequency threshold changes which papers appear in the core or which edges are displayed.

## Uses in Science of Science

- Provides a sampling caveat for [co-cited core literature](../representations/co_cited_core_literature.md).
- Checks the candidate-generation side of [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md).
- Complements edge-filter caveats in [thresholded co-citation network](../representations/thresholded_co_citation_network.md).
- Helps users interpret [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md) as an evidence-based representation rather than an exhaustive field boundary.

## Operationalization

- Record the seed paper or seed set used to enter the specialty.
- Record the citation-index date, source database, document-type filters, and cited-reference matching rules.
- Report node-entry thresholds and edge-display thresholds separately.
- Re-run the map with alternative seeds, lower thresholds, adjacent time windows, or known expert-curated references when completeness matters.
- Label recovered cores as sampled cores unless sensitivity checks support broader claims.

## Evidence and Validations

- Verified full-text evidence from Small (1973) builds a particle-physics co-citation network by starting from one highly cited Gell-Mann paper and a first-quarter 1971 Science Citation Index snapshot.
- Small promotes bibliography items cited ten or more times into the cluster and then omits co-citation linkages below a threshold of seven in the displayed network.
- The paper explicitly cautions that the ten papers may not represent all frequently cited papers in the specialty, while suggesting that they probably constitute the core of the literature.
- This makes the recovered core useful but bounded by the seed, time slice, and thresholding decisions.

## Caveats

- Sensitivity checks can broaden evidence but cannot fully prove that all relevant specialty literature has been recovered.
- Expert lists, review articles, and later databases can reveal missing papers that were not visible in the original citation-index snapshot.
- Lower thresholds improve recall but can add noisy general-method or background references.
- Higher thresholds improve readability but can hide bridges, emerging work, and minority traditions.

## Links

- [co-cited core literature](../representations/co_cited_core_literature.md)
- [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [key-paper concept proxy](../representations/key_paper_concept_proxy.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [science map accuracy validation](science_map_accuracy_validation.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_core_sampling_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation core completeness caveat; sampled co-citation core boundary; seed-dependent co-citation core; co-citation threshold sampling caveat
