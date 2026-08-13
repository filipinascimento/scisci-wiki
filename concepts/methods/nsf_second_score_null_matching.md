# NSF second-score null matching

## Summary

Ambiguous NSF publication strings can be matched by comparing the best search hit against a second-best-score null distribution.

## Canonical Form

- Unit of analysis: raw publication string, search hit, score gap, fuzzy match, or NSF publication linkage.
- Typical representation: score-gap linkage model with a second-best-score threshold.
- Mechanism, measurement, or validation target: precision-oriented matching of NSF award publication strings.
- Empirical signature: only matches with a top-score advantage over a second-score null are labeled high confidence..

## Uses in Science of Science

- Specializes [confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md) for grant output matching.
- Improves auditability of [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md).
- Provides an explicit thresholding rule for ambiguous publication strings.

## Operationalization

- Index paper metadata in a search engine.
- Score raw NSF publication strings against candidate papers.
- Compare the top hit with the second-hit score distribution and retain match confidence.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes Elasticsearch matching, second-score null thresholding, and retention of lower-confidence fuzzy links.

## Caveats

- The reported procedure is conservative and favors precision over recall.
- Score-gap thresholds can drift as the indexed corpus changes.

## Links

- [Confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md)
- [Grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [Identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [Grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `nsf_second_score_null_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: second-best null linkage; NSF Elasticsearch matching; score-gap fuzzy matching; right-tail search-score threshold
