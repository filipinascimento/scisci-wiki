# Coauthorship Random-Walk Collaborator Choice

## Summary

Coauthorship random-walk collaborator choice is a model in which scientists discover collaborators by walking through the existing coauthorship network.

## Canonical Form

- Unit of analysis: scientist, collaborator choice, coauthorship network, discipline, or paper.
- Typical representation: random-walk process on an author collaboration graph.
- Method target: generate collaborator-selection patterns from local network navigation.
- Empirical signature: simulated walks reproduce author productivity, authors per discipline, and interdisciplinarity patterns.

## Uses in Science of Science

- Provides a distinct modeling route for [coauthorship networks](../representations/coauthorship_networks.md).
- Complements [team self-assembly models](team_self_assembly_models.md), which use newcomer and repeat-tie rules.
- Links [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md) to network navigation.
- Helps explain patterns in [interdisciplinarity](../mechanisms/interdisciplinarity.md).

## Operationalization

- Construct a time-ordered coauthorship network.
- Let agents search for collaborators through random walks from their local network position.
- Compare generated team sizes, productivity, field membership, and interdisciplinarity to observed data.
- Test sensitivity to walk length, restart behavior, discipline boundaries, and network aging.

## Evidence and Validations

- Verified full-text evidence from Fortunato et al. (2018) summarizes a model where scientists choose collaborators through random walks on the coauthorship network.
- The review reports that the model reproduces author productivity and the number of authors per discipline.
- Fortunato et al. also report that it reproduces interdisciplinarity of papers and authors.

## Caveats

- Random walks approximate opportunity and awareness, not actual social choice.
- The model can miss institutions, funding, status, geography, and topic constraints.
- Fit to aggregate patterns does not identify the true collaborator-selection mechanism.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [team self-assembly models](team_self_assembly_models.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [collaboration path length](../measures/collaboration_path_length.md)

## References

- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; SciSciNet: W2793071066; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_random_walk_collaborator_choice`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Fortunato et al. (2018) (2018)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.aao0185`
- OpenAlex ID: `W2793071066`
- Dimensions ID: `pub.1101303008`
- SciSciNet ID: `W2793071066`
- Aliases: random-walk collaborator model; coauthor network search model; collaborator random walk; network-walk team formation
