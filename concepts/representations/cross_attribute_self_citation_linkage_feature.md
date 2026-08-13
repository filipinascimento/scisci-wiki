# Cross-attribute self-citation linkage feature

## Summary

Cross-attribute self-citation linkage feature represents self-citation evidence by comparing focal author names with cited-reference author names rather than only matching same-type metadata fields.

## Canonical Form

- Unit of analysis: author mention, cited reference, referenced-author name, similarity feature, or directed citation relation.
- Typical representation: focal author to cited-author name match, self-citation proxy, cross-attribute feature, or directed author-reference edge.
- Representation target: encode identity evidence that crosses from publication authorship metadata to cited-reference metadata.
- Empirical signature: self-citation evidence cannot be represented as a same-attribute overlap without transforming reference-author fields.

## Uses in Science of Science

- Extends [author metadata similarity features](author_metadata_similarity_features.md) with a directed citation-derived feature.
- Connects to [Schulz citation-overlap disambiguation](../methods/schulz_citation_overlap_disambiguation.md) and broader [self-citation rates](../measures/self_citation_rates.md).
- Provides a feature-design caveat for author-disambiguation algorithms that require same-attribute comparisons.

## Operationalization

- Extract author names from cited references and compare them with focal author-name variants.
- Treat the feature as directed evidence from a focal publication to prior publications.
- Separate exact-name, initial-based, and normalized-name matches.
- Audit circularity when self-citation features depend on already-disambiguated identities.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) discusses how a Backes-style same-attribute framework cannot include self-citations in the same way as some other methods.
- The paper notes that referenced-author names can be used as a proxy for self-citation evidence.
- This motif captures the representation needed to move from citation context to author-identity evidence.

## Caveats

- Reference parsing errors and abbreviated author lists can weaken the feature.
- Self-citation signals are circular if they rely on the identity clusters being estimated.
- Citation practices differ by field and career age.

## Links

- [author metadata similarity features](author_metadata_similarity_features.md)
- [Schulz citation-overlap disambiguation](../methods/schulz_citation_overlap_disambiguation.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `cross_attribute_self_citation_linkage_feature`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: self-citation linkage feature; cited-author identity feature; cross-field citation-author match
