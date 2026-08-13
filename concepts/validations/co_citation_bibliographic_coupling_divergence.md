# Co-citation bibliographic-coupling divergence

## Summary

Co-citation bibliographic-coupling divergence is the validation pattern in which strong co-citation ties do not necessarily match shared-reference similarity between the same papers.

## Canonical Form

- Unit of analysis: pair of papers, co-citation edge, bibliographic-coupling edge, specialty network, or validation matrix.
- Typical representation: edge comparison between co-citation strength and bibliographic-coupling strength.
- Mechanism or measurement target: whether retrospective community association differs from similarity in the papers' original reference lists.
- Empirical signature: some paper pairs are strongly co-cited despite weak or absent bibliographic coupling, while other shared-reference pairs are not strongly co-cited later.

## Uses in Science of Science

- Clarifies the difference between [co-citation](../representations/co_citation.md) and [bibliographic coupling](../representations/bibliographic_coupling.md) as empirical signals.
- Shows why recent-paper mapping and retrospective intellectual-history mapping can produce different structures.
- Helps validate [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md) by checking whether it adds information beyond shared references.
- Supports multi-view science maps that compare direct citation, co-citation, bibliographic coupling, text, and semantic embeddings.

## Operationalization

- For a bounded set of papers, compute co-citation strength from later citing documents.
- Compute bibliographic-coupling strength from shared references in the paired papers.
- Compare edge rankings, thresholds, and exceptions across the two matrices.
- Use full-text reading or citation contexts to interpret high-co-citation, low-coupling pairs.
- Record those interpretations through [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md) when a strong edge needs qualitative explanation.

## Evidence and Validations

- Verified full-text evidence from Small (1973) compares co-citation and bibliographic-coupling strengths in a particle-physics example.
- Small finds cases where strongly co-cited papers have weak or no bibliographic coupling, and argues that the two grouping procedures can differ substantially.
- Small reads the Lovelace and Veneziano papers to explain why a very strong co-citation tie can appear even when bibliographic coupling is weak.
- The paper treats direct citation as closer to strong co-citation than bibliographic coupling in the example, while preserving bibliographic coupling as a distinct fixed-reference representation.

## Caveats

- Divergence depends on field, time window, reference-list length, and the maturity of the literature.
- Weak bibliographic coupling does not mean weak intellectual relation; later authors may connect papers through new interpretations.
- Strong shared references can indicate shared background rather than later community-recognized association.

## Links

- [co-citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [direct-citation co-citation overlap](direct_citation_co_citation_overlap.md)
- [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [science maps](../representations/science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_bibliographic_coupling_divergence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation coupling divergence; co-citation bibliographic-coupling contrast; shared-reference co-citation mismatch; coupling co-citation validation
