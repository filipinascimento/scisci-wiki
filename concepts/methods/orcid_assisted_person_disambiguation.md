# ORCID-assisted person disambiguation

## Summary

ORCID-assisted person disambiguation combines algorithmic author clustering with ORCID records to improve person-level identity resolution in scholarly databases.

## Canonical Form

- Unit of analysis: author-name string, author cluster, ORCID record, publication DOI, affiliation, coauthorship pattern, citation pattern, or subject-area trait.
- Typical representation: author cluster with source-native person ID, ORCID match, matched DOI overlap, and precision/recall preference.
- Method target: distinguish people who share names and connect variant names used by the same person.
- Empirical signature: algorithmic clusters are linked to ORCID records when publication DOI overlap supports the match.

## Uses in Science of Science

- Adds a Dimensions-specific person-resolution method to [author name disambiguation](author_name_disambiguation.md).
- Supplies person nodes for [scholarly entity graphs](../representations/scholarly_entity_graphs.md), [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md), and [Dimensions](../datasets/dimensions.md).
- Complements [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md), where ORCID is the canonical external identifier for author entities.
- Supports person-level evaluation only when paired with [homonym/synonym author errors](../validations/homonym_synonym_author_errors.md) and manual audit for high-stakes claims.

## Operationalization

- Build initial clusters from name strings, affiliations, coauthorship patterns, citation patterns, and subject traits.
- Choose the disambiguation loss function explicitly, such as favoring precision over recall.
- Match clusters to ORCID records using overlap between cluster DOIs and ORCID-listed DOIs.
- Preserve unmatched clusters, split clusters, merged clusters, ORCID match confidence, and snapshot date.
- Allow updated ORCID records to flow back into the disambiguation pipeline when possible.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes person disambiguation as one of the most challenging parts of tying together the research landscape.
- Hook et al. report that Dimensions initially used a purely algorithmic approach using affiliation data, coauthorship, citation patterns, and subject-area traits.
- The paper states that the algorithm favored precision over recall, producing more separate clusters rather than incorrectly merging grants or publications into a wrong cluster.
- Hook et al. then describe using public ORCID data by associating algorithmic clusters with ORCIDs based on overlap between article DOIs in a cluster and DOIs in an ORCID record.

## Caveats

- ORCID coverage is incomplete and correlated with field, country, seniority, and time.
- DOI overlap misses works without DOI and can inherit publication-spine coverage bias.
- Precision-favoring clustering reduces false merges but increases split identities and can undercount careers.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [Dimensions](../datasets/dimensions.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [homonym/synonym author errors](../validations/homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `orcid_assisted_person_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: ORCID-assisted author disambiguation; Dimensions person clustering; DOI-overlap ORCID matching; precision-favoring author clustering
