# Directed-citation to co-citation symmetrization

## Summary

Compares asymmetric direct-citation relations with undirected co-citation edges, cautioning that association maps collapse direction and chronology.

## Canonical Form

- Unit of analysis: directed citation relation and symmetric co-citation edge.
- Typical representation: direct-citation matrix compared with an undirected co-citation network.
- Validation target: information lost when directed citation relations are symmetrized into association.
- Empirical signature: co-cited documents can be strongly associated even when direct citation is absent or one-directional.

## Uses in Science of Science

- Adds direction-preservation guidance to [direct citation co-citation overlap](direct_citation_co_citation_overlap.md).
- Useful when validating co-citation maps against citation networks.
- Connects [citation networks](../representations/citation_networks.md) to symmetric similarity measures.

## Operationalization

- Preserve direct-citation direction and publication order before collapsing into co-citation overlap.
- Report direct-citation presence, direction, and age relation alongside undirected co-citation strength.
- Flag interpretations that imply influence from a symmetric association alone.

## Evidence and Validations

- Verified full-text evidence from Small (1973) draws undirected co-citation lines while separately tabulating whether direct citation exists.
- The comparison makes symmetrization a visible validation issue.

## Caveats

- Symmetrization makes maps legible but hides influence direction and chronology.
- Older citation data can miss direct links because of reference-indexing or citation norms.

## Links

- [Direct-citation co-citation overlap](direct_citation_co_citation_overlap.md)
- [Citation networks](../representations/citation_networks.md)
- [Co-citation](../representations/co_citation.md)
- [Symmetric citation-similarity weighting caveat](symmetric_citation_similarity_weighting_caveat.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `directed_citation_to_co_citation_symmetrization`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation symmetrization caveat; directed citation association collapse; citation direction loss in co-citation
