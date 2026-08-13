# Science as a multiscale network

## Summary

Science as a multiscale network represents science as coupled layers of scholars, projects, papers, ideas, institutions, artifacts, tools, funding, and information flows.

## Canonical Form

- Unit of analysis: scholarly entity, social relation, knowledge relation, artifact relation, or policy layer.
- Typical representation: multiscale, multilayer, multiplex, heterogeneous, or temporal network.
- Mechanism or measurement target: how social structure, knowledge structure, material resources, and institutional organization jointly shape discovery.
- Empirical signature: paths, communities, layers, and cross-layer flows reveal regularities that single-output measures miss.

## Uses in Science of Science

- Provides a top-level representation for [multiplex scholarly graphs](multiplex_scholarly_graphs.md), [citation networks](citation_networks.md), [coauthorship networks](coauthorship_networks.md), [science maps](science_maps.md), and field-level embeddings.
- Connects people, institutions, ideas, papers, patents, software, tools, samples, and funding into one modeling vocabulary.
- Supports mechanism pages about [field emergence](../mechanisms/field_emergence.md), [scientific problem choice](../mechanisms/scientific_problem_choice.md), [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md), and [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Treats [brain circulation networks](brain_circulation_networks.md) as one cross-country layer connecting scientists, institutions, and national research systems.
- Helps identify when a concept should be represented as a network layer, a node attribute, an edge type, or a temporal process.

## Operationalization

- Define node sets such as scientists, institutions, papers, projects, topics, patents, grants, datasets, software, methods, or material samples.
- Define edge types such as citation, coauthorship, affiliation, funding, semantic similarity, patent-paper citation, topic membership, tool use, or data sharing.
- Preserve time stamps and provenance so the network can be analyzed as evolving rather than static.
- Compute layer-specific and cross-layer measures, then compare them against field/year, country, and data-source sensitivity checks.

## Evidence and Validations

- Verified full-text evidence from Fortunato et al. (2018) describes contemporary science as a dynamical system driven by interactions among social structures, knowledge representations, and the natural world.
- The review states that scientific knowledge is embodied in papers, books, patents, software, and other artifacts and connected through formal and informal flows of information, ideas, research practices, tools, and samples.
- Fortunato et al. explicitly frame science as a complex, self-organizing, constantly evolving multiscale network.
- Their review also links this representation to collaboration networks, citation networks, research fronts, topic choice, career trajectories, team science, and policy design.

## Caveats

- Multiscale network representations can obscure data gaps if entity resolution, missing layers, and provenance are not documented.
- Cross-layer paths are not automatically causal mechanisms.
- Aggregating across scales can hide field-specific norms, country differences, and artifact-specific citation or authorship practices.

## Links

- [science of science framework](../methods/science_of_science_framework.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [research-object context graphs](research_object_context_graphs.md)
- [citation networks](citation_networks.md)
- [coauthorship networks](coauthorship_networks.md)
- [brain circulation networks](brain_circulation_networks.md)
- [science maps](science_maps.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [field emergence](../mechanisms/field_emergence.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)

## References

- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `science_as_multiscale_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Fortunato et al. (2018) (2018)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.aao0185`
- OpenAlex ID: `W2793071066`
- Dimensions ID: `pub.1101303008`
- SciSciNet ID: `W2793071066`
- Aliases: multiscale science network; science network-of-networks; scholars-papers-ideas network; coupled science system
