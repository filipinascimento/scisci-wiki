# Coauthorship preferential-attachment test

## Summary

Coauthorship preferential-attachment test uses dated collaboration edges to estimate whether scientists with more existing collaborators are more likely to gain new collaborators.

## Canonical Form

- Unit of analysis: author, new coauthorship edge, publication date, current collaborator count, field, or source-domain panel.
- Typical representation: new-collaboration probability by current degree, attachment-kernel curve, event-history table, or degree-binned growth rate.
- Method target: test whether collaboration networks grow through rich-get-richer attachment rather than only through uniform partner choice.
- Empirical signature: the probability of gaining new collaborators increases approximately linearly with current collaborator count.

## Uses in Science of Science

- Provides a collaboration-network implementation of [preferential attachment](../mechanisms/preferential_attachment.md).
- Uses [time-resolved coauthorship reconstruction](time_resolved_coauthorship_reconstruction.md) to turn publication dates into edge-formation evidence.
- Supplies a domain-specific workflow for estimating [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md) in author-author networks.
- Helps interpret [collaborator-count distribution](../measures/collaborator_count_distribution.md) without relying only on final degree distributions.

## Operationalization

- Reconstruct a temporal coauthorship network from dated publication records.
- For each time step, compute each author's existing collaborator count before new papers add edges.
- Identify which authors gain new collaborators through newly published papers.
- Estimate the probability of new collaborator gain as a function of current degree, normalizing by the number of eligible authors.
- Compare the fitted kernel with uniform, sublinear, linear, and superlinear attachment baselines.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) notes that coauthorship networks are unusually time-resolved because publication or submission dates reveal the approximate order of edge additions.
- Newman summarizes tests that measure whether a newly published paper contributes new connections to an individual as a function of how many connections that individual already has.
- The paper reports that two studies using different measurement choices concluded that approximately linear preferential attachment occurs in collaboration networks.
- This makes coauthorship a science-of-science setting where attachment mechanisms can be tested directly from temporal edge formation, not inferred only from a broad degree distribution.

## Caveats

- Publication dates lag real collaboration starts, so edge timing is approximate.
- New collaborator gain can reflect productivity, field size, institution, reputation, team-size norms, or database coverage rather than degree alone.
- Large-team papers can add many new edges simultaneously and should be modeled explicitly.
- Author-disambiguation errors can distort both current degree and new-link counts.

## Links

- [time-resolved coauthorship reconstruction](time_resolved_coauthorship_reconstruction.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [network growth](../mechanisms/network_growth.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md)
- [collaborator fat-tail cutoff](../validations/collaborator_fat_tail_cutoff.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_preferential_attachment_test`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: collaboration attachment test; new-collaborator attachment kernel; coauthor degree attachment test; temporal collaboration preferential attachment
