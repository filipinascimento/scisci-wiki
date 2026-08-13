# Online bibliography network scaling

## Summary

Online bibliography network scaling is the transition from small hand-collected coauthorship samples to near-complete field-scale networks enabled by comprehensive online bibliographies.

## Canonical Form

- Unit of analysis: bibliographic database, field, coauthorship panel, author, or paper.
- Typical method: use online bibliographies to assemble large author-paper records for network construction.
- Method target: scalable collaboration-network coverage.
- Empirical signature: field-scale networks become feasible once publication records are searchable and downloadable at large scale.

## Uses in Science of Science

- Supports [coauthorship networks](../representations/coauthorship_networks.md).
- Extends [publication-record network scale advantage](publication_record_network_scale_advantage.md).
- Helps interpret [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Provides historical context for large-scale bibliometric network analysis.

## Operationalization

- Identify source bibliographies with broad field coverage.
- Extract authorship and publication metadata at field scale.
- Construct author nodes and coauthorship ties after name cleaning and disambiguation.
- Document coverage, update cadence, and source boundaries.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) emphasizes that comprehensive online bibliographies made it possible to construct large collaboration networks.
- The paper contrasts earlier small studies with networks built from MEDLINE, physics preprint records, and Mathematical Reviews.
- This infrastructure shift is a reusable condition for field-scale coauthorship analysis.

## Caveats

- Online availability does not guarantee complete, clean, or comparable coverage.
- Bibliographies differ in document types, update schedules, and author-name formatting.
- Scaling up can amplify disambiguation and source-boundary errors.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [publication-record network scale advantage](publication_record_network_scale_advantage.md)
- [author name disambiguation](author_name_disambiguation.md)
- [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `online_bibliography_network_scaling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: online bibliography scaling; field-scale coauthorship data scaling; digital bibliography network construction
