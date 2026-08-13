# Schulz citation-overlap disambiguation

## Summary

Schulz citation-overlap disambiguation is an unsupervised author-name disambiguation method that links author mentions using coauthor, reference, citing-paper, and self-citation overlap evidence across multiple clustering steps.

## Canonical Form

- Unit of analysis: author mention, name block, candidate cluster pair, coauthor set, reference set, citing-paper set, or self-citation cue.
- Typical representation: multi-step linkage rules, overlap thresholds, citation-neighborhood features, or merged author clusters.
- Method target: use citation-context metadata to resolve same-name author mentions.
- Empirical signature: mentions or clusters are merged when they share enough coauthors, references, citing papers, or self-citation signals.

## Uses in Science of Science

- Adds a citation-neighborhood method to [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md).
- Extends [author metadata similarity features](../representations/author_metadata_similarity_features.md) beyond coauthors and affiliations.
- Provides a named workflow for [author similarity clustering](author_similarity_clustering.md).
- Supports ablation tests over citation-derived features and thresholds.

## Operationalization

- Block mentions by name and assemble coauthor, reference, citing-paper, and self-citation evidence for each mention or cluster.
- Apply the method's sequence of thresholded merging steps.
- Use stricter or more flexible thresholds depending on available validation data.
- Compare output clusters with labeled identifiers using pairwise and cluster-oriented metrics.
- Report missing citation data because citation-overlap features are unavailable for many recent or sparsely cited papers.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) describes the Schulz et al. method as using coauthor overlap, cited-reference overlap, citing-paper overlap, and self-citation evidence.
- The paper includes Schulz et al. in a controlled comparison against other unsupervised approaches and name-only baselines.
- Tekles and Bornmann report that method rankings differ by metric, with Schulz et al. changing position under pairwise versus best-cluster metrics.
- Their attribute-set comparison also shows that citation-overlap features are only one layer in overall disambiguation quality.

## Caveats

- Citation-overlap evidence is weak for new papers, low-citation fields, and papers with incomplete reference data.
- Authors can change topics, which reduces reference and citing-paper overlap within a real career.
- Different people in the same specialty can share reference neighborhoods.
- Self-citation cues depend on prior disambiguation choices and can become circular.

## Links

- [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md)
- [author similarity clustering](author_similarity_clustering.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [self-citation rates](../measures/self_citation_rates.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `schulz_citation_overlap_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: Schulz author disambiguation; citation-overlap author disambiguation; reference-overlap disambiguation; citing-paper overlap clustering
