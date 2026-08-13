# Normalized publication relatedness

## Summary

Normalized publication relatedness rescales a publication's citation-based links so every linked publication has the same total relatedness weight before clustering.

## Canonical Form

- Unit of analysis: publication pair, citation edge, row-normalized adjacency value, or relatedness matrix.
- Typical representation: asymmetric normalized relatedness score `a_ij = c_ij / sum_k c_ik`.
- Measurement target: paper similarity corrected for field-level citation-density differences.
- Empirical signature: each publication's total outgoing normalized relatedness is one when it has at least one related publication.

## Uses in Science of Science

- Prevents high-citation-density fields from dominating [publication-level field classification](../methods/publication_level_field_classification.md).
- Converts a [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md) into weighted clustering input.
- Connects citation-based field construction to fractional-counting ideas used elsewhere in bibliometrics.
- Provides a reusable normalization motif for large-scale [science maps](../representations/science_maps.md).

## Operationalization

- Define raw relatedness `c_ij`, usually as a binary direct-citation relation.
- Divide each pairwise relatedness value by publication `i`'s total relatedness to all other publications.
- Preserve the possibility that `a_ij` differs from `a_ji`.
- Set normalized relatedness to zero for publications with no related publications, then handle them explicitly in coverage checks.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) notes that fields differ strongly in citation behavior and that raw relatedness scores are not directly comparable across fields.
- The paper normalizes publication `i`'s relatedness to publication `j` by dividing by publication `i`'s total relatedness to all other publications.
- Waltman and van Eck connect this to fractional citation counting and state that the normalization gives all linked publications the same overall weight.
- They also note that normalized relatedness need not be symmetric and that publications with no relations receive zero total normalized relatedness.

## Caveats

- Row normalization equalizes publication weight but does not remove all field, age, language, or document-type effects.
- Asymmetry can matter if later algorithms assume symmetric similarities.
- Publications with no links require a separate inclusion, imputation, or exclusion rule.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [full versus fractional citation counting](full_fractional_citation_counting.md)
- [science maps](../representations/science_maps.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `normalized_publication_relatedness`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: row-normalized publication relatedness; fractional relatedness score; normalized citation relatedness; paper relatedness normalization
