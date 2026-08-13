# SKG sunset-successor continuity

## Summary

SKG sunset-successor continuity is the validation concern that science-of-science pipelines remain usable when a core scholarly knowledge graph is retired and replaced by a successor.

## Canonical Form

- Unit of analysis: scholarly knowledge graph, database retirement event, successor index, pipeline dependency, or identifier migration.
- Typical representation: continuity audit, sunset risk note, migration plan, or successor-readiness checklist.
- Validation target: prevent infrastructure retirement from silently breaking longitudinal analyses, identifiers, coverage, or reproducibility.
- Empirical signature: a widely used scholarly graph announces retirement and a replacement launches to preserve access and functionality.

## Uses in Science of Science

- Extends [MAG-to-OpenAlex migration audit](mag_to_openalex_migration_audit.md) from record-level comparison to infrastructure dependency risk.
- Connects [MAG publication backbone](../datasets/mag_publication_backbone.md), [OpenAlex](../datasets/openalex.md), and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Helps projects document when a data source is stale, retired, or superseded.
- Supports reproducibility planning for pipelines built on external scholarly graphs.

## Operationalization

- Identify pipelines and derived datasets that depend on a retiring scholarly graph.
- Record the retirement date, last available snapshot, successor source, and crosswalk strategy.
- Validate successor coverage, entity model differences, identifier continuity, and changed update cadence.
- Preserve old identifiers when historical compatibility matters.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) states that Microsoft announced the discontinuation of Microsoft Academic Graph in May 2021.
- The paper notes concern that MAG would be difficult to replace with existing systems.
- Priem et al. state that OpenAlex was created to address this concern and launched as a drop-in replacement contemporaneously with MAG's retirement on January 1, 2022.
- This supports treating graph retirement and successor launch as an infrastructure-continuity validation issue.

## Caveats

- A successor can be a functional replacement without preserving all fields, identifiers, or coverage patterns.
- Drop-in replacement claims should be audited for each analysis task.
- Retired-source snapshots can remain necessary for reproducing historical results.

## Links

- [MAG-to-OpenAlex migration audit](mag_to_openalex_migration_audit.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [OpenAlex](../datasets/openalex.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [open SKG comparator ecology](../datasets/open_skg_comparator_ecology.md)
- [citation index research infrastructure](../datasets/citation_index_research_infrastructure.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; SciSciNet: W4229010617; WoS: unknown]

## Metadata

- Concept ID: `skg_sunset_successor_continuity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: scholarly graph sunset continuity; knowledge-graph successor audit; MAG successor continuity; SKG retirement replacement validation
