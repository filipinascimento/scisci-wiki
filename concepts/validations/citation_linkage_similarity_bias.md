# Citation-linkage similarity bias

## Summary

Citation-linkage similarity bias is the validation risk that citation-only similarity measures for maps or classifications reflect social networks, publication age, and cumulative attention as well as topical relatedness.

## Canonical Form

- Unit of analysis: citation link, journal pair, paper pair, similarity matrix, science map, or field classification.
- Typical representation: citation-only versus keyword/text/linkage-fused comparison, age-bias audit, social-network confound check, or topical validation.
- Validation target: test whether citation-linkage proximity captures intellectual similarity rather than only citation practice and cumulative visibility.
- Empirical signature: citation-only maps differ from maps that combine linkage with topical evidence, especially around old, prestigious, broad, or socially connected sources.

## Uses in Science of Science

- Provides a validation caveat for [journal similarity mapping](../methods/journal_similarity_mapping.md) and [science map accuracy validation](science_map_accuracy_validation.md).
- Motivates [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md) when maps can combine cited references, keywords, text, or other topical signals.
- Connects journal-level science maps to [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md), which addresses similar problems at publication level.
- Helps users interpret citation-based field proximity as a signal that needs topical and temporal corroboration.

## Operationalization

- Build a citation-only similarity matrix and at least one topical or fused alternative.
- Compare map neighborhoods, cluster labels, and local accuracy across the alternatives.
- Check whether similarity is driven by publication age, journal prestige, prior citation volume, or social-network proximity.
- Validate ambiguous clusters with keywords, title/abstract terms, expert labels, or paper-level samples.
- Document which signals are used and how they are weighted.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) states that using only citation links as a similarity measure is imperfect.
- The paper explains that citations follow social networks, depend on publication age, and depend on the number of citations already received.
- Borner et al. argue that a combination of linkage and topical data is desirable for science maps.
- The 2010 UCSD map uses both linkage and keyword data, providing a concrete map-design response to this citation-linkage bias.

## Caveats

- Topical data also have biases: keyword vocabularies drift, abstracts are unevenly available, and text can miss tacit methodological similarity.
- Citation links remain valuable evidence of scholarly connection when their age, prestige, and social-network biases are considered.
- Fused maps can be harder to interpret if signal weights are not reported.

## Links

- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [science maps](../representations/science_maps.md)
- [field classifications](../measures/field_classifications.md)
- [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `citation_linkage_similarity_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: citation-only map bias; linkage-only similarity bias; citation proximity confound; citation-link map caveat
