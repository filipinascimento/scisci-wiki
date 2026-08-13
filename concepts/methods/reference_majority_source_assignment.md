# Reference-majority source assignment

## Summary

New journals can be classified by the existing subdiscipline they cite most strongly.

## Canonical Form

- Unit of analysis: new source title, reference, existing journal cluster, subdiscipline, citation threshold, or assignment label.
- Typical representation: cited-cluster majority rule for new source-title classification.
- Mechanism, measurement, or validation target: reference-based placement of new journals in an existing science map.
- Empirical signature: a new source title is assigned to the category that receives the largest share of its references when support exceeds a threshold.

## Uses in Science of Science

- Refines science-map classification methods by linking it to [science map update workflows](science_map_update_workflows.md) and [journal similarity mapping](journal_similarity_mapping.md).
- Useful as a reusable check when [field classifications](../measures/field_classifications.md) is used in science-of-science inference.
- Creates cross-links to [paper field linkages](../representations/paper_field_linkages.md) so the motif is not interpreted in isolation.

## Operationalization

- Count references from articles in each new source title to journals already assigned to UCSD categories.
- Assign the new source title to the most referenced category when a minimum citation threshold is met.
- Flag sparse reference profiles for manual review or delayed assignment.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) reports that the Scopus update assigned each new journal to the category it referenced most, requiring at least 10 citations within that cluster.
- The method uses reference behavior as the placement signal for new titles.

## Caveats

- Reference profiles may be sparse for low-volume journals.
- References can lag editorial scope changes or be biased by journal age and citation practices.

## Links

- [Science map update workflows](science_map_update_workflows.md)
- [Journal similarity mapping](journal_similarity_mapping.md)
- [Field classifications](../measures/field_classifications.md)
- [Paper-field linkages](../representations/paper_field_linkages.md)
- [Citation networks](../representations/citation_networks.md)
- [Top-N similarity edge filtering](top_n_similarity_edge_filtering.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `reference_majority_source_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: cited-cluster majority rule; reference-based journal assignment; cited-category threshold assignment
