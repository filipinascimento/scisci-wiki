# Citation-relation triangulation table

## Summary

Citation-relation triangulation table compares co-citation, bibliographic coupling, and direct citation for the same paper set to identify concordant ties and exceptions.

## Canonical Form

- Unit of analysis: paper pair, co-citation count, bibliographic-coupling count, direct-citation edge, or comparison matrix.
- Typical representation: pair table with columns for multiple citation relations and textual interpretation.
- Validation target: whether a relation inferred from one citation structure is corroborated or contradicted by other citation structures.
- Empirical signature: strong co-citation links are checked against both shared-reference and direct-citation evidence.

## Uses in Science of Science

- Generalizes [co-citation bibliographic-coupling divergence](co_citation_bibliographic_coupling_divergence.md) into a three-way comparison.
- Generalizes [direct-citation co-citation overlap](direct_citation_co_citation_overlap.md) beyond pairwise overlap counts.
- Uses [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md) when table exceptions require reading the citing context.
- Connects [bibliographic coupling](../representations/bibliographic_coupling.md), [co-citation](../representations/co_citation.md), and [citation networks](../representations/citation_networks.md).

## Operationalization

- Select a focal paper set or specialty core.
- Compute pairwise co-citation strength and bibliographic-coupling strength.
- Mark whether either paper directly cites the other.
- Inspect high-disagreement cases and report whether each relation captures a different aspect of intellectual association.

## Evidence and Validations

- Verified full-text evidence from Small (1973) compares bibliographic coupling and co-citation for the same specialty paper set.
- Small reports cases where strong co-citation occurs with little or no bibliographic coupling.
- The paper also compares direct-citation patterns with co-citation strengths, finding that direct citation tracks strong co-citation better than bibliographic coupling but still misses some strong co-citation links.

## Caveats

- The triangulation table is diagnostic, not a final adjudication of relatedness.
- Direct citation, bibliographic coupling, and co-citation operate on different temporal directions and can disagree for substantive reasons.
- Small specialty samples are sensitive to seed selection and citation-index coverage.

## Links

- [co-citation bibliographic-coupling divergence](co_citation_bibliographic_coupling_divergence.md)
- [direct-citation co-citation overlap](direct_citation_co_citation_overlap.md)
- [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [citation networks](../representations/citation_networks.md)
- [co-citation](../representations/co_citation.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; SciSciNet: W2005207065; WoS: unknown]

## Metadata

- Concept ID: `citation_relation_triangulation_table`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: citation relation triangulation; co-citation coupling direct-citation table; citation-structure comparison table; three-way citation relation audit
