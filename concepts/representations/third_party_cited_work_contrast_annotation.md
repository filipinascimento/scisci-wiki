# Third-party cited-work contrast annotation

## Summary

Third-party cited-work contrast annotation represents citation cases where the citing paper contrasts two cited works with each other rather than only comparing itself to one cited work.

## Canonical Form

- Unit of analysis: citation context, cited-work pair, citation-function label, or rhetorical relation.
- Typical representation: contrast label connecting cited work A and cited work B inside a citing text.
- Representation target: multi-work rhetorical relations in citation discourse.
- Empirical signature: the citation context states that one cited work differs from, improves on, or contradicts another cited work.

## Uses in Science of Science

- Extends [citation function taxonomies](citation_function_taxonomies.md) beyond one citing-paper to one cited-work relation.
- Adds typed relation detail to [rhetorical citation maps](rhetorical_citation_maps.md).
- Supports [citation-aware search and summarization](../methods/citation_aware_search_summarization.md) by identifying contrasts among prior works.
- Helps distinguish literature-positioning from direct use or criticism.

## Operationalization

- Parse citation contexts containing multiple cited works.
- Annotate whether the rhetorical contrast is between the citing paper and a cited work or between two cited works.
- Represent cited-work pairs as typed edges or hyperedges where needed.
- Preserve evidence spans that identify both cited works and the contrast cue.
- Evaluate whether annotators can apply the distinction reliably.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) includes citation-function categories for contrast and comparison among cited works.
- The paper's annotation scheme separates cases where the author's work is contrasted with prior work from cases involving relations among other cited works.
- This distinction shows that citation-function representations can need more than a simple signed edge from citing to cited paper.
- It is especially relevant for rhetorical citation maps and citation-aware literature search.

## Caveats

- Multi-citation contexts can be hard to attach to the correct cited works.
- Contrast language can be implicit or softened by scholarly politeness.
- Pairwise edges may oversimplify contexts involving more than two cited works.

## Links

- [citation function taxonomies](citation_function_taxonomies.md)
- [rhetorical citation maps](rhetorical_citation_maps.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [citation role attachment error analysis](../validations/citation_role_attachment_error_analysis.md)
- [citation use-similarity boundary ambiguity](../validations/citation_use_similarity_boundary_ambiguity.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `third_party_cited_work_contrast_annotation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: cited-work contrast label; third-party citation contrast; cited-cited relation annotation; contrast among prior works
