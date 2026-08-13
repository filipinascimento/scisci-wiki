# Professional-librarian proposal MeSH coding

## Summary

Professional-librarian proposal MeSH coding is a controlled-vocabulary workflow in which trained indexers map proposal text to MeSH terms for reproducible frontier and expertise measurement.

## Canonical Form

- Unit of analysis: proposal, MeSH term, librarian code, controlled vocabulary, or indexing guideline.
- Typical representation: proposal-term matrix built from professional indexing.
- Method target: create comparable proposal representations that do not rely on author-selected keywords alone.
- Empirical signature: proposals receive standardized MeSH terms assigned by trained coders under explicit guidelines.

## Uses in Science of Science

- Feeds [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md).
- Supports [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md) and [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md).
- Helps separate vocabulary coding from later statistical models such as [proposal format covariate control vector](proposal_format_covariate_control_vector.md).

## Operationalization

- Select a controlled vocabulary and version.
- Train or hire coders familiar with the vocabulary and indexing rules.
- Assign terms to each proposal using proposal text rather than reviewer labels.
- Record coder identity, guidelines, vocabulary version, and quality checks.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports using MeSH terms assigned by professional science librarians rather than by proposal authors.
- The study used an NLM-guideline-trained librarian to code proposals.
- Proposals were mapped into the same MeSH space used to measure prior literature and evaluator expertise.

## Caveats

- Professional coding improves standardization but can still miss emerging terminology.
- MeSH is domain-specific and may not represent all methods or theory claims.
- Human indexing adds cost and should be checked for consistency when scaled.

## Links

- [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [publication-count MeSH expertise vector](../representations/publication_count_mesh_expertise_vector.md)
- [proposal format covariate control vector](proposal_format_covariate_control_vector.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626; WoS: unknown]

## Metadata

- Concept ID: `professional_librarian_proposal_mesh_coding`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: librarian-coded proposal MeSH; professional MeSH proposal indexing; controlled-vocabulary proposal coding; NLM-guideline proposal indexing
