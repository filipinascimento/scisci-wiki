# OpenAlex authorship object

## Summary

The OpenAlex authorship object represents a three-way claim that an author, one or more institutions, and a work are connected in a specific publication record.

## Canonical Form

- Unit of analysis: authorship row, author-work edge, author-institution-work claim, affiliation string, or paper-author-affiliation triplet.
- Typical representation: work ID, author ID, institution ID(s), raw affiliation, author position, and provenance fields.
- Representation target: preserve authorship and affiliation as a relation, not only as separate author and institution node lists.
- Empirical signature: paper-author-affiliation analyses can reconstruct who is credited on a work and which institutions are claimed in that authorship context.

## Uses in Science of Science

- Specializes [paper-author-affiliation linkages](paper_author_affiliation_linkages.md) for OpenAlex workflows.
- Provides the join layer between [OpenAlex entity-type model](openalex_entity_type_model.md), [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md), and author-level analyses.
- Supports coauthorship networks, institutional collaboration, mobility, team-size measures, and author-order studies when the authorship relation is preserved.
- Needs supplementation for corresponding-author or author-role analyses flagged by [OpenAlex missing funding and corresponding-author metadata](../validations/openalex_missing_funding_corresponding_author_metadata.md).

## Operationalization

- Extract authorship records with work ID, author ID, institution ID(s), and raw affiliation fields.
- Keep the relation at authorship level when building coauthorship, affiliation, or institution-level tables.
- Avoid flattening authors and institutions independently unless the analysis does not require author-specific affiliations.
- Record snapshot date and missing-affiliation flags because institution links can be incomplete or updated later.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that OpenAlex connects authors to works through an authorship object.
- The paper describes this object as formalizing the claim that an author, affiliated with institution(s), is a creator of a work.
- Priem et al. state that institutions, like authors, are linked to works through this authorship object.
- The same full text makes the authorship object central to work-centered entity graphs, because it binds person and institution metadata to publication records.

## Caveats

- Authorship-level affiliation can differ from current employment, grant affiliation, or later institutional movement.
- Missing or parsed affiliation strings can break the author-institution-work triplet.
- The authorship object alone should not be treated as a complete corresponding-author, funder, or contribution-role layer.
- Consortium authorship, group authors, and multiple affiliations require explicit handling.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex entity-type model](openalex_entity_type_model.md)
- [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md)
- [OpenAlex author-disambiguation features](../methods/openalex_author_disambiguation_features.md)
- [OpenAlex missing funding and corresponding-author metadata](../validations/openalex_missing_funding_corresponding_author_metadata.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [coauthorship networks](coauthorship_networks.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_authorship_object`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex authorship relation; author institution work triplet; authorship object; paper-author-institution claim
