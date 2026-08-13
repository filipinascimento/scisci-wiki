# Dereferenceable scholarly entity IDs

## Summary

Dereferenceable scholarly entity IDs are persistent entity identifiers expressed as URLs that resolve to human-readable and machine-readable representations.

## Canonical Form

- Unit of analysis: work, author, source, institution, concept, entity ID, URL, or API object.
- Typical representation: URL primary key, entity landing page, JSON endpoint, or linked-data style resolver.
- Representation target: make scholarly graph entities directly addressable for both people and software.
- Empirical signature: the same identifier can be used as a stable key, a webpage, and a machine-readable object request.

## Uses in Science of Science

- Refines [OpenAlex canonical external IDs](openalex_canonical_external_ids.md) by separating source-native resolvability from external-ID crosswalks.
- Supports [scholarly identifier spine](scholarly_identifier_spine.md) and [external identifier registry authority](../validations/external_identifier_registry_authority.md).
- Helps build reproducible concept pages, data pipelines, and graph exports that can point to inspectable entity records.
- Connects bibliometric infrastructure to linked-data and API design principles.

## Operationalization

- Store the source-native entity ID as a URL when the provider supports it.
- Confirm that the URL resolves to a human-readable page and a machine-readable representation or API object.
- Preserve canonical external IDs separately from the dereferenceable source-native ID.
- Record snapshot date or API version when dereferenced metadata are used analytically.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) states that all OpenAlex entities receive a persistent OpenAlex ID that acts as the dataset primary key.
- The paper specifies that this ID is expressed as a URL.
- Priem et al. further state that the URL can resolve to either a human-readable webpage or a machine-readable JSON object.

## Caveats

- Dereferenceability depends on the provider keeping endpoints stable.
- A resolvable ID does not guarantee metadata correctness or completeness.
- URL IDs should not be confused with community-adopted external identifiers such as DOI, ORCID, ISSN-L, or ROR.

## Links

- [OpenAlex canonical external IDs](openalex_canonical_external_ids.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [external identifier registry authority](../validations/external_identifier_registry_authority.md)
- [OpenAlex entity-type model](openalex_entity_type_model.md)
- [OpenAlex](../datasets/openalex.md)
- [OpenAlex work-version resolution](../methods/openalex_work_version_resolution.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; SciSciNet: W4229010617; WoS: unknown]

## Metadata

- Concept ID: `dereferenceable_scholarly_entity_ids`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: resolvable scholarly IDs; URL entity identifiers; dereferenceable OpenAlex IDs; machine-readable scholarly entity URLs
