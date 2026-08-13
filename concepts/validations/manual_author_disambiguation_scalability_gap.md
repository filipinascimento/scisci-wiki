# Manual author-disambiguation scalability gap

## Summary

Manual author-disambiguation scalability gap is the validation motif that hand-resolving author identities becomes infeasible for large author-level bibliometric studies.

## Canonical Form

- Unit of analysis: author mention, author cluster, benchmark sample, study corpus, or curation workflow.
- Typical representation: manual curation burden, sampled audit, hand-labeling budget, or algorithmic replacement threshold.
- Validation target: make clear when author-level inference depends on scalable disambiguation rather than exhaustive manual review.
- Empirical signature: the corpus is large enough that manual resolution can only be used for sampled checks or gold-standard construction.

## Uses in Science of Science

- Motivates [author name disambiguation](../methods/author_name_disambiguation.md) as infrastructure for large-scale author studies.
- Helps interpret [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md) as a response to curation limits.
- Connects benchmark construction to [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md) and [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md).

## Operationalization

- Report the number of author mentions, name blocks, and unique raw name strings in the target corpus.
- State whether manual disambiguation was exhaustive, sampled, or replaced by algorithmic rules.
- Use human review on sampled name blocks to estimate error rather than implying full manual certainty.
- Record the downstream analyses that are sensitive to identity errors.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) frames reliable author-level bibliometrics as requiring disambiguation that cannot be done manually for many researchers.
- The paper compares unsupervised approaches under controlled conditions because single-researcher manual resolution does not scale to large bibliometric studies.
- This motif is separate from algorithm design: it is the workflow constraint that makes algorithmic disambiguation necessary.

## Caveats

- Small elite cohorts, CV-validated samples, or institution-specific studies may still support manual curation.
- Manual labels can also contain errors, especially for incomplete CVs or identifier profiles.
- Scalability thresholds depend on available staff, language coverage, and metadata richness.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `manual_author_disambiguation_scalability_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: manual author curation limit; author-disambiguation hand-labeling bottleneck; scalable author identity validation
