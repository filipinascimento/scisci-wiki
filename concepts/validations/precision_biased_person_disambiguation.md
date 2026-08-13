# Precision-biased person disambiguation

## Summary

Person clustering can be tuned to avoid false merges, accepting that some real author records remain split.

## Canonical Form

- Unit of analysis: author cluster, researcher profile, ORCID, affiliation, coauthor network, citation context, or disambiguation error.
- Typical representation: precision-weighted author-disambiguation validation profile.
- Mechanism, measurement, or validation target: tradeoff between false merges and split researcher identities.
- Empirical signature: author profiles show fewer false attached records but more split clusters under a precision-first objective.

## Uses in Science of Science

- Refines person-disambiguation validation by linking it to [author name disambiguation](../methods/author_name_disambiguation.md) and [homonym synonym author errors](homonym_synonym_author_errors.md).
- Useful as a reusable check when [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md) is used in science-of-science inference.
- Creates cross-links to [researcherid disambiguation gold standard](researcherid_disambiguation_gold_standard.md) so the motif is not interpreted in isolation.

## Operationalization

- Evaluate author clusters with precision-weighted objectives.
- Use affiliation, coauthorship, citations, subject traits, and ORCID DOI overlap as features.
- Report false-merge and false-split consequences separately for career, output, and funding analyses.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states the initial Dimensions algorithm favors precision over recall so authors may see multiple clusters rather than wrongly attached grants or publications.
- The motif makes the disambiguation objective visible before person-level analysis.

## Caveats

- Precision bias undercounts careers, output, and funding links for people with name variants, mobility, or incomplete ORCID records.
- False splits can be as consequential as false merges for longitudinal careers.

## Links

- [Author name disambiguation](../methods/author_name_disambiguation.md)
- [Homonym and synonym author errors](homonym_synonym_author_errors.md)
- [Disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [Proprietary author-ID auditability gap](proprietary_author_id_auditability_gap.md)
- [Author metadata similarity features](../representations/author_metadata_similarity_features.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `precision_biased_person_disambiguation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: conservative author clustering; precision-first disambiguation; split-biased person IDs
