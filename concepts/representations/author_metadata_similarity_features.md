# Author metadata similarity features

## Summary

Author metadata similarity features are the publication-level and author-level attributes used to compare author mentions inside a name block for author-name disambiguation.

## Canonical Form

- Unit of analysis: author mention, mention pair, author cluster, metadata attribute, feature vector, or similarity score.
- Typical representation: coauthor overlap, affiliation overlap, subject-category overlap, title TF-IDF, journal-title TF-IDF, reference/citation overlap, keyword match, email match, or weighted rule score.
- Representation target: convert heterogeneous bibliographic metadata into comparable evidence for or against same-author identity.
- Empirical signature: mentions sharing rare or specific metadata features receive higher similarity than mentions sharing only common or weak features.

## Uses in Science of Science

- Supplies feature inputs for [author similarity clustering](../methods/author_similarity_clustering.md).
- Makes [author name disambiguation](../methods/author_name_disambiguation.md) auditable by documenting which metadata fields drive linkage.
- Interacts with [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md), [name-block size complexity](../measures/name_block_size_complexity.md), and [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md).

## Operationalization

- Extract metadata fields for each author mention: coauthors, affiliation, journal, title, abstract, references, citing papers, subject categories, keywords, author names in cited references, and email addresses when available.
- Normalize strings, identifiers, field labels, and time-varying institution names before similarity scoring.
- Compute pairwise or cluster-level feature scores using overlap, cosine similarity, TF-IDF, rule scores, or specificity-weighted matches.
- Combine feature scores with documented weights, equal-weight averages, or rule-based sums.
- Store missingness indicators because feature availability varies by database, field, document type, and publication year.
- Preserve method-specific feature bundles when comparing [COTA coauthor TF-IDF disambiguation](../methods/cota_coauthor_tf_idf_disambiguation.md), [Schulz citation-overlap disambiguation](../methods/schulz_citation_overlap_disambiguation.md), and [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md).

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) describes author-name disambiguation approaches that exploit metadata such as coauthors, subject categories, and journals.
- The paper compares unsupervised approaches that specify similarity functions from author-mention attributes rather than supervised training labels.
- Tekles and Bornmann describe approaches using coauthors, publication titles, journal titles, references, citing papers, affiliations, keywords, author names in cited references, and email addresses.
- The paper also describes specificity-weighted attribute scores, where sharing a rare subject category provides stronger same-author evidence than sharing a common category.
- The COTA, Schulz, and Backes approaches are split into separate method pages because each bundles and weights these features differently.
- These features are combined into thresholds and clustering rules, so feature design is a separate modeling layer from blocking and evaluation.
- Tekles and Bornmann also run a [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md), showing that feature choice and feature weights can change disambiguation quality independently of the clustering approach.

## Caveats

- Metadata availability and quality differ sharply across databases, fields, languages, and historical periods.
- Coauthors, affiliations, and topics can change over a career, so strong reliance on stable metadata can split heterogeneous careers.
- Common metadata features can create false merges in large name blocks unless specificity or block-size thresholds are used.
- Some features, such as email, are high precision but sparse.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [Caron-van Eck rule-score disambiguation](../methods/caron_van_eck_rule_score_disambiguation.md)
- [COTA coauthor TF-IDF disambiguation](../methods/cota_coauthor_tf_idf_disambiguation.md)
- [Schulz citation-overlap disambiguation](../methods/schulz_citation_overlap_disambiguation.md)
- [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)
- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `author_metadata_similarity_features`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: author mention features; disambiguation metadata features; author similarity feature vector; specificity-weighted metadata
