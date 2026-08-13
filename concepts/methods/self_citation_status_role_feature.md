# Self-citation status role feature

## Summary

Self-citation status role feature marks whether a citation points to the citing authors' own prior work so citation-function classifiers can account for different probabilities of reuse, criticism, and continuity.

## Canonical Form

- Unit of analysis: citation instance, citing-paper author list, cited-paper author list, self-citation flag, or citation-function feature vector.
- Typical representation: binary or graded self-citation feature derived from overlap between citing and cited authors.
- Method target: provide citation-function models with a structured signal about author continuity between the citing and cited works.
- Empirical signature: self-citations are expected to be more likely to involve reuse or continuation and less likely to involve explicit criticism.

## Uses in Science of Science

- Adds a citation-specific feature to [citation-function feature vectors](../representations/citation_function_feature_vectors.md).
- Links citation-function classification to broader [self-citation rates](../measures/self_citation_rates.md) and self-citation robustness motifs.
- Helps interpret [citation sentiment-role projection](citation_sentiment_role_projection.md), because self-citations may have different polarity and role distributions than citations to others.
- Provides a method-level bridge between full-text citation roles and author-level citation-network features.

## Operationalization

- Parse the citing paper's author list and each cited paper's reference-list author names.
- Detect overlap between citing and cited authors, using last names or resolved author identifiers when available.
- Add a self-citation flag or overlap count to each citation-function instance.
- Compare role distributions for self-citations versus non-self-citations.
- Report name ambiguity, `et al.` expansion, author-order conventions, and whether group authors are included.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) includes self-citation status among the automatically determined features for citation-function classification.
- The paper states that self-citations are detected through overlap between citing and cited authors.
- Teufel et al. motivate the feature by arguing that self-citations may have higher probability of reusing material from prior own work and lower tendency toward criticism.
- The same full text notes that reference-list information gives access to cited author names even when `et al.` in running text hides later authors.

## Caveats

- Name overlap is not full author disambiguation and can merge homonyms or miss synonyms.
- Self-citation can signal legitimate continuity, method reuse, intellectual ancestry, or gaming; the feature alone does not distinguish these.
- Field norms, team size, and author order affect how self-citation status should be interpreted.

## Links

- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [citation function classification](citation_function_classification.md)
- [citation sentiment-role projection](citation_sentiment_role_projection.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [author self-citation definition choice](author_self_citation_definition_choice.md)
- [full-name self-citation matching](full_name_self_citation_matching.md)
- [author name disambiguation](author_name_disambiguation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `self_citation_status_role_feature`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: self-citation classifier feature; citing-cited author overlap feature; citation-role self-citation flag; own-work citation feature
